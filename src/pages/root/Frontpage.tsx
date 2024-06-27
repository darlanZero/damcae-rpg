import FrontPageHeader from "../../components/FrontPageHeader"
import FrontPageHistory from "../../components/FrontPageHistory"


const Frontpage = () => {
  return (
    <>
      <section>
        <FrontPageHeader />
        <div className="divider"></div>

        <div>
          <FrontPageHistory />
        </div>
      </section>
    </>
  )
}

export default Frontpage