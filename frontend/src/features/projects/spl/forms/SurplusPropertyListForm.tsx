import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Form, FastDatePicker, FastInput, FastCurrencyInput, Check } from 'components/common/form';
import { useFormikContext } from 'formik';
import {
  ProjectNotes,
  ReviewWorkflowStatus,
  IProject,
  TasksForm,
  disposeWarning,
  FormikTable,
} from '../../common';
import { PrivateNotes, PublicNotes } from '../../common/components/ProjectNotes';
import './SurplusPropertyListForm.scss';
import _ from 'lodash';
import GenericModal from 'components/common/GenericModal';
import { getProjectAgencyResponseColumns } from 'features/projects/common/components/columns';

interface ISurplusPropertyListFormProps {
  isReadOnly?: boolean;
  onClickMarketedOn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickContractInPlace: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickDisposedExternally: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Form component of SurplusPropertyListForm. TODO: add button click functionality.
 * @param param0 isReadOnly disable editing
 */
const SurplusPropertyListForm = ({
  isReadOnly,
  onClickMarketedOn,
  onClickContractInPlace,
  onClickDisposedExternally,
}: ISurplusPropertyListFormProps) => {
  const formikProps = useFormikContext<IProject>();
  const contractTasks = _.filter(formikProps.values.tasks, {
    statusCode: ReviewWorkflowStatus.ContractInPlace,
  });
  const [dispose, setDispose] = useState(false);

  return (
    <Container fluid className="SurplusPropertyListForm">
      <h3>Enhanced Referral Process Complete</h3>
      <Form.Row>
        <Form.Label column md={3}>
          Date of Entering Marketing
          <span className="required">&nbsp;*</span>
        </Form.Label>
        <FastDatePicker
          outerClassName="col-md-2"
          formikProps={formikProps}
          disabled={isReadOnly}
          field="marketedOn"
        />
        <div className="col-md-7">
          <Button
            disabled={
              isReadOnly ||
              !formikProps.values.marketedOn ||
              formikProps.values.statusCode !== ReviewWorkflowStatus.PreMarketing
            }
            onClick={onClickMarketedOn}
          >
            Change Status to Marketing
          </Button>
          {formikProps.values.statusCode === ReviewWorkflowStatus.OnMarket}
        </div>
      </Form.Row>
      <Form.Row>
        <h3>Agency Interest</h3>
        <FormikTable
          columns={getProjectAgencyResponseColumns({ offerAmount: true, disabled: isReadOnly })}
          name="ProjectAgencyResponses"
          field="projectAgencyResponses"
        />
      </Form.Row>
      <Form.Row>
        <Form.Label column md={3}>
          Contract in Place
          <span className="required">&nbsp;*</span>
        </Form.Label>
        <Check
          type="radio"
          field="isContractConditional"
          radioLabelOne="Conditional"
          radioLabelTwo="Unconditional"
        />
      </Form.Row>
      <Form.Row>
        <Form.Label column md={3}>
          Date of Accepted Offer
          <span className="required">&nbsp;*</span>
        </Form.Label>
        <FastDatePicker
          outerClassName="col-md-2"
          formikProps={formikProps}
          disabled={isReadOnly}
          field="offerAcceptedOn"
        />
      </Form.Row>
      <Form.Row>
        <Form.Label column md={3}>
          Purchaser
          <span className="required">&nbsp;*</span>
        </Form.Label>
        <FastInput
          field="purchaser"
          outerClassName="col-md-2"
          disabled={isReadOnly}
          formikProps={formikProps}
        />
      </Form.Row>
      <Form.Row>
        <Form.Label column md={3}>
          Offer Amount
          <span className="required">&nbsp;*</span>
        </Form.Label>
        <FastCurrencyInput
          field="offerAmount"
          outerClassName="col-md-2"
          disabled={isReadOnly}
          formikProps={formikProps}
        />
        <div className="col-md-6">
          <Button
            disabled={
              isReadOnly ||
              !formikProps.values.offerAmount ||
              formikProps.values.statusCode !== ReviewWorkflowStatus.OnMarket
            }
            onClick={onClickContractInPlace}
          >
            Change Status to Contract in Place
          </Button>
        </div>
      </Form.Row>
      <TasksForm tasks={contractTasks} />
      <ProjectNotes outerClassName="col-md-12" disabled={true} />
      <PublicNotes outerClassName="col-md-12" disabled={isReadOnly} />
      <PrivateNotes outerClassName="col-md-12" disabled={isReadOnly} />
      <Form.Row>
        <Form.Label column md={3}>
          Date Disposed Externally
          <span className="required">&nbsp;*</span>
        </Form.Label>
        <FastDatePicker
          outerClassName="col-md-2"
          formikProps={formikProps}
          disabled={isReadOnly}
          field="disposedOn"
        />
        <div className="col-md-6">
          <Button
            disabled={
              isReadOnly ||
              !formikProps.values.disposedOn ||
              _.filter(contractTasks, { isCompleted: false, isOptional: false }).length !== 0 ||
              formikProps.values.statusCode !== ReviewWorkflowStatus.ContractInPlace
            }
            onClick={() => {
              formikProps.validateForm().then((errors: any) => {
                if (errors !== undefined && Object.keys(errors).length === 0) {
                  setDispose(true);
                } else {
                  //force formik to display the validation errors.
                  formikProps.submitForm();
                }
              });
            }}
          >
            Change Status to Disposed Externally
          </Button>
          {dispose && (
            <GenericModal
              display={dispose}
              cancelButtonText="Close"
              okButtonText="Dispose Project"
              handleOk={(e: any) => {
                onClickDisposedExternally(e);
                setDispose(false);
              }}
              handleCancel={() => {
                setDispose(false);
              }}
              title="Really Dispose Project?"
              message={disposeWarning}
            />
          )}
        </div>
      </Form.Row>
    </Container>
  );
};

export default SurplusPropertyListForm;