"use client";

import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { updateDestination } from "@/lib/data";

const EditModal = ({ destination }) => {
  const {
    _id,
    imageUrl,
    price,
    destinationName,
    duration,
    country,
    description,
    category,
    departureDate,
  } = destination;

  const [open, setOpen] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await updateDestination(_id, formData);
    // console.log(result, "form");
  };
  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Button
        onPress={() => setOpen(true)}
        variant="outline"
        className="rounded-none"
      >
        <BiEdit />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container
          placement="auto"
          className="max-h-screen overflow-y-auto"
        >
          <Modal.Dialog className="sm:max-w-xl max-h-[90vh] overflow-hidden">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Edit Destination</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6 overflow-y-auto max-h-[75vh]">
              <Surface variant="default">
                <form onSubmit={handleUpdate} className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                        isRequired
                      >
                        <Label>Destination Name</Label>
                        <Input />
                        <FieldError />
                      </TextField>
                    </div>

                    <TextField defaultValue={country} name="country" isRequired>
                      <Label>Country</Label>
                      <Input />
                      <FieldError />
                    </TextField>

                    <div>
                      <Label className="mb-2 block">Category</Label>

                      <Select name="category" defaultSelectedKeys={[category]}>
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Beach">Beach</ListBox.Item>
                            <ListBox.Item id="Mountain">Mountain</ListBox.Item>
                            <ListBox.Item id="City">City</ListBox.Item>
                            <ListBox.Item id="Adventure">
                              Adventure
                            </ListBox.Item>
                            <ListBox.Item id="Cultural">Cultural</ListBox.Item>
                            <ListBox.Item id="Luxury">Luxury</ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    <TextField
                      defaultValue={price}
                      name="price"
                      type="number"
                      isRequired
                    >
                      <Label>Price</Label>
                      <Input type="number" />
                      <FieldError />
                    </TextField>

                    <TextField
                      defaultValue={duration}
                      name="duration"
                      isRequired
                    >
                      <Label>Duration</Label>
                      <Input />
                      <FieldError />
                    </TextField>

                    <TextField
                      defaultValue={departureDate?.split("T")[0]}
                      name="departureDate"
                      type="date"
                      isRequired
                    >
                      <Label>Departure Date</Label>
                      <Input type="date" />
                      <FieldError />
                    </TextField>

                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input type="url" />
                        <FieldError />
                      </TextField>
                    </div>

                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  <Modal.Footer>
                    <Button type="submit">Save Changes</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
