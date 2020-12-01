import { ILayerItem } from './types';

export const layersTree: ILayerItem[] = [
  {
    key: 'Administrative Boundaries',
    label: 'Administrative Boundaries',
    on: false,
    nodes: [
      {
        key: 'parcelBoundaries',
        label: 'Parcel Boundaries',
        on: false,
        layers: 'pub:WHSE_CADASTRE.PMBC_PARCEL_FABRIC_POLY_SVW',
        transparent: true,
        format: 'image/png',
        zIndex: 10,
        id: 'parcelLayer',
        color: '#ff9800',
      },
      {
        key: 'municipalities ',
        label: 'Municipalities ',
        on: false,
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_MUNICIPALITIES_SP',
        transparent: true,
        format: 'image/png',
        zIndex: 8,
        id: 'municipalityLayer',
        opacity: 0.5,
        color: '#b39ddb',
      },
      {
        key: 'crownLeases',
        label: 'Crown Leases',
        on: false,
        layers: 'pub:WHSE_TANTALIS.TA_CROWN_LEASES_SVW',
        transparent: true,
        format: 'image/png',
        zIndex: 7,
        id: 'crownLeases',
        opacity: 0.5,
      },
      {
        key: 'crownInventory',
        label: 'Crown Inventory',
        on: false,
        layers: 'pub:WHSE_TANTALIS.TA_CROWN_INVENTORY_SVW',
        transparent: true,
        format: 'image/png',
        zIndex: 6,
        id: 'crownInventory',
        opacity: 0.5,
      },
      {
        key: 'crownInclusions',
        label: 'Crown Inclusions',
        on: false,
        layers: 'pub:WHSE_TANTALIS.TA_CROWN_INCLUSIONS_SVW',
        transparent: true,
        format: 'image/png',
        zIndex: 5,
        id: 'crownInclusions',
        opacity: 0.5,
      },
      {
        key: 'agriculturalLandReserveLines',
        label: 'Agricultural Land Reserve Lines',
        on: false,
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.OATS_ALR_BOUNDARY_LINES_SVW',
        transparent: true,
        format: 'image/png',
        zIndex: 4,
        id: 'agriculturalLandReserveLines',
        opacity: 0.5,
      },
    ],
  },
];