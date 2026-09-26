function Field({ label, name, error, children }) {
  const errorId = `${name}-error`;

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>

      {children}

      {error && (
        <p
          id={errorId}
          className="field-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Field;