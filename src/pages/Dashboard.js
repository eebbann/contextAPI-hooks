import { useContext } from "react"
import { AppContext } from "../App"

const Dashboard = ({user}) => {
	const {user} = useContext(AppContext);
	
  return (
    <section className='section'>
      <h4>Dashboard</h4>
			<p>hello {user}</p>
    </section>
  );
};
export default Dashboard;
