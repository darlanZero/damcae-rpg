import FrontPageHeader from "../../components/FrontPageHeader"
import FrontPageHistory from "../../components/FrontPageHistory"


const Frontpage = () => {
  return (
    <>
      <section>
        <div>
          <FrontPageHeader />
        </div>
        <div className="divider"></div>

        <div>
          <FrontPageHistory />
        </div>
      </section>
    </>
  )
}

export default Frontpage