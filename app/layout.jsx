import React from 'react'
import "@/style/global.css";

export const metadata = {
    title:"XeroCodee",
    description:"cloud management made easy using AI"
}

function layout({children}) {
  return (
    <html>
        <body>
            <div className="root">
            {children}
            </div>
        </body>
    </html>
  )
}

export default layout