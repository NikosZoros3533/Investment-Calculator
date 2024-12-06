

export default function Form({form,handleChange}) {
  
  
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            value={form.initialInvestment}
            onChange={(e) => handleChange("initialInvestment",e.target.value)}
            required
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={form.annualInvestment}
            onChange={(e) => handleChange("annualInvestment",e.target.value)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            value={form.expectedReturn}
            onChange={(e) => handleChange("expectedReturn",e.target.value)}
            required
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            value={form.duration}
            onChange={(e) => handleChange("duration",e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}

