export default function UserInput({ onInputChange, userInput }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => onInputChange("initialInvestment", parseFloat(event.target.value))} />
                </p>
                <p>
                    <label>Annual Amount (after the first year)</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualAmount}
                        onChange={(event) => onInputChange("annualAmount", parseFloat(event.target.value))} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return (percent)</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => onInputChange("expectedReturn", parseFloat(event.target.value))} />
                </p>
                <p>
                    <label>Duration (yaers)</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) => onInputChange("duration", parseFloat(event.target.value))} />
                </p>
            </div>
        </section>
    );
}
