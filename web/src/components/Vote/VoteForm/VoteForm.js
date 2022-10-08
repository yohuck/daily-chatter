import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const VoteForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.vote?.id)
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
          name="totalUpVotes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total up votes
        </Label>

        <NumberField
          name="totalUpVotes"
          defaultValue={props.vote?.totalUpVotes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="totalUpVotes" className="rw-field-error" />

        <Label
          name="totalDownVotes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total down votes
        </Label>

        <NumberField
          name="totalDownVotes"
          defaultValue={props.vote?.totalDownVotes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="totalDownVotes" className="rw-field-error" />

        <Label
          name="superVotes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Super votes
        </Label>

        <NumberField
          name="superVotes"
          defaultValue={props.vote?.superVotes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="superVotes" className="rw-field-error" />

        <Label
          name="totalVotes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total votes
        </Label>

        <NumberField
          name="totalVotes"
          defaultValue={props.vote?.totalVotes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="totalVotes" className="rw-field-error" />

        <Label
          name="responseId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Response id
        </Label>

        <NumberField
          name="responseId"
          defaultValue={props.vote?.responseId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="responseId" className="rw-field-error" />

        <Label
          name="postId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Post id
        </Label>

        <NumberField
          name="postId"
          defaultValue={props.vote?.postId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="postId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.vote?.userId}
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

export default VoteForm
