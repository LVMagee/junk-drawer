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

const categoryOptions = [
  {label: 'Antiques', value: 'Antiques'},
  {label: 'Appliances', value: 'Appliances'},
  {label: 'Art', value: 'Art'},
  {label: 'Clothing', value: 'Clothing'},
  {label: 'Handbags', value: 'Handbags'},
  {label: 'Jewelry/Accesories', value: 'Jewelry'},
  {label: 'Tools', value: 'Tools'},
  {label: 'Vehicles', value: 'Vehicles'},
  {label: 'Other', value: 'Other'}
]

const FormView = props => (
  <Form>
    <FieldsContainer>
      <Fieldset label="Item Details">
      <FormGroup>
          <Label>Item Category</Label>
          <Select
              name="Category"
              label="Category"
              options={categoryOptions}
              placeholder="Appliances"
          />
        </FormGroup>
        <FormGroup>
          <Label>Item Name/Title</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Artist/Designer</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Manufacturer/Brand</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Serial Number</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Model Number</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Value</Label>
          <Input/>
        </FormGroup>
        <FormGroup>
          <Label>Date Purchased</Label>
          <Input placeholder="mm/dd/yyy" />
        </FormGroup>
        <FormGroup>
          <Label>Quantity</Label>
          <Input/>
        </FormGroup>
      </Fieldset>
    </FieldsContainer>
    <ActionsContainer>
      <Button icon="md-checkmark" iconPlacement="right">Save</Button>
    </ActionsContainer>
  </Form>
)

export default FormView