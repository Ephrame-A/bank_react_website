import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="
         hover:bg-sky-300 hover:rounded-full hover:p-3 sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
  )
}

export default Clients