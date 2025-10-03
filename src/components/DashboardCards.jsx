import MedicineReminderCard from "./MedicineReminderCard";
import WellnessTrackerCard from "./WellnessTrackerCard";
import DailyChecklist from "./DailyChecklist";
import GraphCard from "./GraphCard";

export default function DashboardCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <MedicineReminderCard />
      <WellnessTrackerCard />
      <DailyChecklist />
      <GraphCard />
    </div>
  );
}
