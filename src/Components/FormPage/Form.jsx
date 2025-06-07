import { formFields } from "../../Data/formFieldData";

export default function Form() {
  return (
    <section className="section-form">
      <div className="wrapper title-wrapper">
        <h1 className="reg-form-title">Registeration Form</h1>
      </div>
      <form action="#" className="wrapper reg-form">
        {formFields.map((formField) => {
          const { id, fieldTitle, inputs } = formField;
          return (
            <fieldset className="user-input-field-wrapper" key={id}>
              <legend className="user-input-field-title">{fieldTitle}</legend>

              <div className="user-input-field-contents">
                {inputs.map((input) => {
                  const { id, label, name } = input;
                  return (
                    <div className="user-input-wrapper" key={id}>
                      <label htmlFor={name} className="user-input-label">
                        {label}
                      </label>
                      <input
                        type="text"
                        id={name}
                        placeholder=" "
                        className="user-input"
                      />
                    </div>
                  );
                })}
              </div>
            </fieldset>
          );
        })}

        <button className="btn btn--submit">Submit</button>
      </form>
    </section>
  );
}
