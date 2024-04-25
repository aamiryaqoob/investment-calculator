import { useState } from "react"

export default function UserInput() {

    const [userInputs, setUserInputs] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIndentifier, newValue) {
        setUserInputs(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIndentifier]: newValue
            };
        })
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInputs.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInputs.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)} />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInputs.expectedReturn} onChange={(event) => handleChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInputs.duration} onChange={(event) => handleChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    )
}