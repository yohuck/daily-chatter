import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ResponseForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.response?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>

        <TextField
          name="body"
          defaultValue={props.response?.body}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="body" className="rw-field-error" />

        <Label
          name="upvotes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Upvotes
        </Label>

        <NumberField
          name="upvotes"
          defaultValue={props.response?.upvotes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="upvotes" className="rw-field-error" />

        <Label
          name="downvotes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Downvotes
        </Label>

        <NumberField
          name="downvotes"
          defaultValue={props.response?.downvotes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="downvotes" className="rw-field-error" />

        <Label
          name="reports"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reports
        </Label>

        <NumberField
          name="reports"
          defaultValue={props.response?.reports}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="reports" className="rw-field-error" />

        <Label
          name="supervote"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Supervote
        </Label>

        <NumberField
          name="supervote"
          defaultValue={props.response?.supervote}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="supervote" className="rw-field-error" />

        <Label
          name="promptId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prompt id
        </Label>

        <NumberField
          name="promptId"
          defaultValue={props.response?.promptId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="promptId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.response?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ResponseForm
