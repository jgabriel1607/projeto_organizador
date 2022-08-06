import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import {BrowserRouter} from "react-router-dom"
import Providers from "./providers"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
		<BrowserRouter>
			<React.StrictMode>
				<Providers>
					<App />
				</Providers>
			</React.StrictMode>
		</BrowserRouter>
)


reportWebVitals()
