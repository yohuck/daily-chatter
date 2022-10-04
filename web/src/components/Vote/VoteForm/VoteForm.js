import {
  Form,
  FormError,
  FieldError,
  Label,
  CheckboxField,
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
          name="upvote"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Upvote
        </Label>

        <CheckboxField
          name="upvote"
          defaultChecked={props.vote?.upvote}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="upvote" className="rw-field-error" />

        <Label
          name="downvote"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Downvote
        </Label>

        <CheckboxField
          name="downvote"
          defaultChecked={props.vote?.downvote}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="downvote" className="rw-field-error" />

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
