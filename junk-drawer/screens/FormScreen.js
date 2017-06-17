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
              id="category"
              label="Category"
              options={categoryOptions}
              placeholder="Appliances"
          />
        </FormGroup>
        <FormGroup>
          <Label>Item Name/Title</Label>
          <Input 
          id="itemName"
          />
        </FormGroup>
        <FormGroup>
          <Label>Artist/Designer</Label>
          <Input 
          id=""
          />
        </FormGroup>
        <FormGroup>
          <Label>Manufacturer/Brand</Label>
          <Input 
          id="make"
          />
        </FormGroup>
        <FormGroup>
          <Label>Serial Number</Label>
          <Input 
          id="serialNumber"
          />
        </FormGroup>
        <FormGroup>
          <Label>Model Number</Label>
          <Input 
          id="model"
          />
        </FormGroup>
        <FormGroup>
          <Label>Value</Label>
          <Input
          id="price"
          />
        </FormGroup>
        <FormGroup>
          <Label>Date Purchased</Label>
          <Input 
          id="date"
          placeholder="mm/dd/yyy" />
        </FormGroup>
      </Fieldset>
    </FieldsContainer>
    <ActionsContainer>
      <Button style={{position: 'absolute', left: 0, right: 0, bottom: 0}} type="submit" icon="md-checkmark" iconPlacement="right">Save</Button>
    </ActionsContainer>
  </Form>
)

export default FormView