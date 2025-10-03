import MedicineReminderCard from "./MedicineReminderCard";
import WellnessTrackerCard from "./WellnessTrackerCard";
import DailyChecklist from "./DailyChecklist";
import GraphCard from "./GraphCard";

export default function DashboardCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
      {/* Medicine Reminder */}
      <div data-aos="fade-up" className="h-full">
        <MedicineReminderCard />
      </div>

      {/* Wellness Tracker */}
      <div data-aos="fade-up" data-aos-delay="100" className="h-full">
        <WellnessTrackerCard />
      </div>

      {/* Daily Checklist */}
      <div data-aos="fade-up" data-aos-delay="200" className="h-full">
        <DailyChecklist />
      </div>

      {/* Daily Progress Graph */}
      <div data-aos="fade-up" data-aos-delay="300" className="h-full">
        <GraphCard />
      </div>
    </div>
  );
}
