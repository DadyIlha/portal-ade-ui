import { Sidebar } from "@/components/sidebar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function TRIpage() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Sidebar />
      </div>
      <div className=" flex-1 ">
        <h1>Teoria de resposta ao item</h1>
        <Separator />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
