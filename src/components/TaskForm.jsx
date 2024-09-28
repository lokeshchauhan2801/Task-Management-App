// components/TaskForm.jsx
import { useState } from "react";
import { useFormik } from "formik";
import useFormikErrors from "../hooks/useFormikErrors";
import FormInputWrapper from "./FormInputWrapper";
import ModalWrapper from "./ModalWrapper";
import Dropdown from "./Dropdown";

const memberOptions = [
  { label: "Team Member 1", value: "member1" },
  { label: "Team Member 2", value: "member2" },
  { label: "Team Member 3", value: "member3" },
  { label: "Team Member 4", value: "member4" },
];
const statusOptions = [
  { label: "Uninitiated", value: "uninitiated" },
  { label: "In Progress", value: "inprogress" },
  { label: "Completed", value: "completed" },
];
const priorityOptions = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];
const assignedOptions = [
  { label: "True", value: "true" },
  { label: "False", value: "false" },
];

const validateTaskForm = (values) => {
  const errors = {};
  if (!values.title) errors.title = "Please enter title";
  if (!values.status) errors.status = "Please select status";
  if (!values.assignedMembers?.length)
    errors.assignedMembers = "Please select assigned members";
  if (!values.dueDate) errors.dueDate = "Please select due date";
  if (!values.isAssigned) errors.isAssigned = "Please select is assigned";
  if (!values.priority) errors.priority = "Please select priority";
  return errors;
};

// eslint-disable-next-line react/prop-types
const TaskForm = ({ onSubmit, onCancelClick }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      status: null,
      assignedMembers: [],
      dueDate: "",
      isAssigned: null,
      estimatedHours: 0,
      priority: null,
    },
    validate: validateTaskForm,
    onSubmit: (values) => {
      const task  = {
        title: values.title,
        status: values.status?.value,
        assignedMembers: values.assignedMembers?.map(e=>e.value),
        dueDate: values.dueDate,
        isAssigned: values.isAssigned?.value,
        estimatedHours: values.estimatedHours,
        priority: values.priority?.value
      }
      onSubmit && onSubmit(task)
    },
  });

  const errors = useFormikErrors(formik);

  return (
    <ModalWrapper>
      <form onSubmit={formik.handleSubmit}>
        <h2 className="text-xl font-medium mb-4 p-3">Create New Task</h2>
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] px-5">
          <FormInputWrapper title="Task title" error={errors.title}>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              placeholder="Task Title"
            />
          </FormInputWrapper>

          <FormInputWrapper title="Status" error={errors.status}>
            <Dropdown
              options={statusOptions}
              placeholder="Select Status"
              selectedOptions={
                formik.values.status ? [formik.values.status] : []
              }
              onChange={([option]) => {
                formik.setFieldTouched("status", true);
                if (option) {
                  formik.setFieldValue("status", option);
                }
              }}
            />
          </FormInputWrapper>
          <FormInputWrapper
            title="Assigned Members"
            error={errors.assignedMembers}
          >
            <Dropdown
              options={memberOptions}
              placeholder="Select Assigned Members"
              multiselect
              selectedOptions={formik.values.assignedMembers}
              onChange={(options) => {
                formik.setFieldTouched("assignedMembers", true);
                if (options) {
                  formik.setFieldValue("assignedMembers", options);
                }
              }}
            />
          </FormInputWrapper>

          <FormInputWrapper title="Is Assigned" error={errors.isAssigned}>
            <Dropdown
              options={assignedOptions}
              placeholder="Select Is Assigned"
              selectedOptions={
                formik.values.isAssigned ? [formik.values.isAssigned] : []
              }
              onChange={([option]) => {
                formik.setFieldTouched("isAssigned", true);
                if (option) {
                  formik.setFieldValue("isAssigned", option);
                }
              }}
            />
          </FormInputWrapper>
          <FormInputWrapper title="Select Priority" error={errors.priority}>
            <Dropdown
              options={priorityOptions}
              placeholder="Select Priority"
              selectedOptions={
                formik.values.priority ? [formik.values.priority] : []
              }
              onChange={([option]) => {
                formik.setFieldTouched("priority", true);
                if (option) {
                  formik.setFieldValue("priority", option);
                }
              }}
            />
          </FormInputWrapper>

          <FormInputWrapper title="Due Date" error={errors.dueDate}>
            <input
              type="date"
              name="dueDate"
              value={formik.values.dueDate}
              onChange={formik.handleChange}
            />
          </FormInputWrapper>

          <FormInputWrapper
            title="Estimated Hours"
            error={errors.estimatedHours}
          >
            <input
              type="number"
              name="estimatedHours"
              value={formik.values.estimatedHours}
              onChange={formik.handleChange}
              placeholder=""
            />
          </FormInputWrapper>
        </div>
        <div className="flex flex-row-reverse mt-4">
          <button type="submit" className="btn-green min-w-20 uppercase">
            Save
          </button>
          <button
            type="button"
            className="btn-gray min-w-20 uppercase me-3"
            onClick={() => {
              onCancelClick && onCancelClick();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default TaskForm;
