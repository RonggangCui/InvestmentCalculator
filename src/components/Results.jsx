import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {

    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = userInput.initialInvestment;
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map((yearData) => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualAmount * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - yearData.interest;
                return (<tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>);
            })}
        </tbody>
    </table>
}