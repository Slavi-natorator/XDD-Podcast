import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <p> © {new Date().getFullYear()} XDD PODCAST. All rights reserved.</p>
        </div>
    )
}