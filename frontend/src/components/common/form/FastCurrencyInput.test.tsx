import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import { noop } from 'lodash';
import React from 'react';

import { FastCurrencyInput } from './FastCurrencyInput';

describe('FastCurrencyInput', () => {
  it('fast currency input renders correctly', () => {
    const { container } = render(
      <Formik initialValues={{ assessedLand: '' }} onSubmit={noop}>
        {props => (
          <Form>
            <FastCurrencyInput formikProps={props} field={'assessedLand'} tooltip={'Tooltip'} />
          </Form>
        )}
      </Formik>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('fast currency input should not show tooltip', () => {
    const { container } = render(
      <Formik initialValues={{ assessedLand: '' }} onSubmit={noop}>
        {props => (
          <Form>
            <FastCurrencyInput formikProps={props} field={'assessedLand'} />
          </Form>
        )}
      </Formik>,
    );

    expect(container.querySelector('svg[className="tooltip-icon"]')).toBeFalsy();
  });

  it('fast currency input should show tooltip', () => {
    const { container } = render(
      <Formik initialValues={{ assessedLand: '' }} onSubmit={noop}>
        {props => (
          <Form>
            <FastCurrencyInput formikProps={props} field={'assessedLand'} tooltip="Test tooltip" />
          </Form>
        )}
      </Formik>,
    );

    expect(container.querySelector('svg[className="tooltip-icon"]'));
  });

  it('fast currency input custom placeholder', () => {
    const component = render(
      <Formik initialValues={{ assessedLand: '' }} onSubmit={noop}>
        {props => (
          <Form>
            <FastCurrencyInput
              formikProps={props}
              field={'assessedLand'}
              tooltip="Test tooltip"
              placeholder="custom placeholder"
            />
          </Form>
        )}
      </Formik>,
    );

    expect(component.findByPlaceholderText('custom placeholder'));
  });
});
