import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard/page'
import { TodoDataTable } from './_components/todo-data-table'
import { Button } from '@/components/ui/button'
import { TodoUpsertSheet } from './_components/todo-upsert-sheet'
import { PlusIcon } from '@radix-ui/react-icons'

export default async function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>
          <DashboardPageHeaderNav>
            <TodoUpsertSheet>
              <Button variant="outline">
                <PlusIcon className="w-4 h-4 mr-3" />
                Add todo{' '}
              </Button>
            </TodoUpsertSheet>
          </DashboardPageHeaderNav>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <TodoDataTable />
      </DashboardPageMain>
    </DashboardPage>
  )
}
