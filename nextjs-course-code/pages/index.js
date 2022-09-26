import List from '../components/events/List';
import { getFeaturedEvents } from '../dummy-data';


function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <List events={featuredEvents}/>
    </div>
  );
}

export default HomePage;
