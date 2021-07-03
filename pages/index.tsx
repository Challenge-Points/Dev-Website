import ServerStats from '../components/ServerStats';
import UserLeaderboard from '../components/UserLeaderboard';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <ServerStats />
      <UserLeaderboard type="recent"/>
    </div>
  )
}
