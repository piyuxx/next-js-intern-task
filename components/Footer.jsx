import "@/style/footer.css"
import EmailForm from "./EmailForm"
function Footer() {
  return (
    <>
      <div className="LastHeading">
        Automate all aspects of your delivery process with
        AI support.
      </div>
      <div className="LastText">Get Early Access</div>
      <div className="email-input-wrap">
        <EmailForm />
      </div>

      <div className="footer">Copyright © 2023 EXOCODE TECHNOLOGIES | All rights reserved</div>
    </>
  )
}

export default Footer