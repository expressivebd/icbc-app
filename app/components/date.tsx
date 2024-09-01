import { format } from "date-fns";

export default function DateComponent({ dateString }: { dateString: string }) {
  return (
    <time
      dateTime={dateString}
      className="text-[#97989F] text-sm pt-5 font-istok"
    >
      {format(new Date(dateString), "LLLL	d, yyyy")}
    </time>
  );
}
