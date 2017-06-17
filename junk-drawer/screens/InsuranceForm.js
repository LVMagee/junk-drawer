import React, { Component } from 'react'
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Switch
} from 'react-native-clean-form'


const InsuranceForm = props => (
  <Form>
    <FieldsContainer>
      <Fieldset label="Insurance">
      <FormGroup>
          <Label>Insurance Type</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Company Name</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Agent</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Policy Number</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Start Date</Label>
          <Input placeholder="mm/dd/yyyy" />
        </FormGroup>
        <FormGroup>
          <Label>/Additional Information</Label>
          <Input/>
        </FormGroup>
      </Fieldset>
    </FieldsContainer>
    <ActionsContainer>
      <Button icon="md-checkmark" iconPlacement="right">Save</Button>
    </ActionsContainer>
  </Form>
)

export default InsuranceForm