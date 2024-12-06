import logo_img from "../assets/investment-calculator-logo.png"


export default function Header() {
    return (
        <>
            <header id="header">
                <img src={logo_img} alt="logo" />
                <h1>Investment Calculator</h1>
            </header>
        </>
    )
}