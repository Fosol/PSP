import 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useKeycloak } from '@react-keycloak/web';
import { render } from '@testing-library/react';
import * as API from 'constants/API';
import { PropertyTypes } from 'constants/propertyTypes';
import { createMemoryHistory } from 'history';
import { IBuilding, IParcel } from 'interfaces';
import { mockBuilding } from 'mocks/filterDataMock';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { lookupCodesSlice } from 'store/slices/lookupCodes';

import InfoContent from './InfoContent';

jest.mock('@react-keycloak/web');

const mockParcelNoSub = {
  id: 1,
  pid: '000-000-000',
  zoning: '',
  zoningPotential: '',
  classificationId: 1,
  encumbranceReason: '',
  agencyId: '',
  isSensitive: false,
  latitude: 48,
  longitude: 123,
  classification: 'Core Operational',
  name: 'test name',
  description: 'test',
  assessedLand: 10000,
  assessedBuilding: 10000,
  evaluations: [
    {
      date: '2021-05-12T18:57:19.992Z',
      key: 'Assessed',
      value: 10000,
    },
  ],
  fiscals: [
    {
      fiscalYear: 2020,
      key: 'NetBook',
      value: 10000,
    },
  ],
  address: {
    id: 1,
    line1: '1234 mock Street',
    administrativeArea: 'Victoria',
    province: 'BC',
    postal: 'V1V1V1',
    provinceId: '1',
  },
  landArea: 123,
  landLegalDescription: 'test description',
  buildings: [],
  parcels: [],
  agency: 'AEST',
} as IParcel;

export const mockParcel = {
  id: 1,
  pid: '000-000-000',
  pin: '',
  zoning: '',
  zoningPotential: '',
  classificationId: 1,
  encumbranceReason: '',
  agencyId: '',
  isSensitive: false,
  latitude: 48,
  longitude: 123,
  classification: 'Core Operational',
  name: 'test name',
  description: 'test',
  assessedLand: 10000,
  assessedBuilding: 11000,
  evaluations: [
    {
      date: '2021-05-12T18:57:19.992Z',
      key: 'Assessed',
      value: 10000,
    },
  ],
  fiscals: [
    {
      fiscalYear: 2020,
      key: 'NetBook',
      value: 10000,
    },
  ],
  address: {
    id: 1,
    line1: '1234 mock Street',
    line2: 'N/A',
    administrativeArea: 'Victoria',
    province: 'BC',
    postal: 'V1V1V1',
    provinceId: '1',
  },
  landArea: 123,
  landLegalDescription: 'test description',
  buildings: [mockBuilding],
  parcels: [],
  agency: 'AEST',
  agencyFullName: 'Ministry of Advanced Education',
  subAgency: 'KPU',
  subAgencyFullName: 'Kwantlen Polytechnic University',
} as IParcel;

const lCodes = {
  lookupCodes: [
    {
      code: 'AEST',
      id: 1,
      isDisabled: false,
      name: 'Ministry of Advanced Education',
      type: API.AGENCY_CODE_SET_NAME,
    },
    {
      code: 'KPU',
      id: 181,
      isDisabled: false,
      name: 'Kwantlen Polytechnic University',
      type: API.AGENCY_CODE_SET_NAME,
    },
  ],
};

const mockStore = configureMockStore([thunk]);
const history = createMemoryHistory();

const store = mockStore({
  [lookupCodesSlice.name]: lCodes,
});

const ContentComponent = (
  propertyInfo: IParcel | IBuilding | null,
  propertyTypeId: PropertyTypes | null,
  canViewDetails: boolean,
) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <InfoContent
          propertyInfo={propertyInfo}
          propertyTypeId={propertyTypeId}
          canViewDetails={canViewDetails}
        />
      </Router>
    </Provider>
  );
};

describe('InfoContent View functionality', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    (useKeycloak as jest.Mock).mockReturnValue({
      keycloak: {
        userInfo: {
          agencies: [1],
          roles: [],
        },
        subject: 'test',
      },
    });
  });
  it('InfoContent renders correctly', () => {
    const { container } = render(ContentComponent(mockParcel, PropertyTypes.PARCEL, true));
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Shows all parcel information when can view', () => {
    const { getByText } = render(ContentComponent(mockParcel, PropertyTypes.PARCEL, true));
    expect(getByText('Parcel Identification')).toBeVisible();
    //Identification information
    expect(getByText('000-000-000')).toBeVisible();
    expect(getByText('test name')).toBeVisible();
    expect(getByText('Ministry of Advanced Education')).toBeVisible();
    expect(getByText('Kwantlen Polytechnic University')).toBeVisible();
    expect(getByText('Core Operational')).toBeVisible();
    //Location data
    expect(getByText('1234 mock Street')).toBeVisible();
    expect(getByText('Victoria')).toBeVisible();
    expect(getByText('48')).toBeVisible();
    //Legal Description
    expect(getByText('test description')).toBeVisible();
  });

  it('Lot size formats correctly', () => {
    const { getByText } = render(ContentComponent(mockParcel, PropertyTypes.PARCEL, true));
    expect(getByText('123 hectares')).toBeVisible();
  });

  it('Assessed value formats correctly', () => {
    const { getByText } = render(ContentComponent(mockParcel, PropertyTypes.PARCEL, true));
    expect(getByText('$10,000')).toBeVisible();
  });

  it('Correct label if no sub agency', () => {
    const { getByText } = render(ContentComponent(mockParcelNoSub, PropertyTypes.PARCEL, true));
    expect(getByText('Owning ministry')).toBeVisible();
  });

  it('Shows all building information when can view', () => {
    const { getByText } = render(ContentComponent(mockBuilding, PropertyTypes.BUILDING, true));
    expect(getByText('Building Identification')).toBeVisible();
    //Identification information
    expect(getByText('test name')).toBeVisible();
    expect(getByText('Ministry of Advanced Education')).toBeVisible();
    expect(getByText('Kwantlen Polytechnic University')).toBeVisible();
    expect(getByText('Core Operational')).toBeVisible();
    //Location data
    expect(getByText('1234 mock Street')).toBeVisible();
    expect(getByText('Victoria')).toBeVisible();
    expect(getByText('48')).toBeVisible();
    //Building Attributes
    expect(getByText('University/College')).toBeVisible();
    expect(getByText('100%')).toBeVisible();
  });

  it('Building area formated correctly', () => {
    const { getByText } = render(ContentComponent(mockBuilding, PropertyTypes.BUILDING, true));
    expect(getByText('100 sq. metres')).toBeVisible();
  });
});
