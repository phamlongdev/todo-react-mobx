import { Button, List } from "antd";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { todoStore } from "../stores/todoStore";
import { EStatus } from "../types/enums/status";
import { ITask } from "../types/interfaces/todo";

type Props = {};

export const Result = observer((props: Props) => {
  const handleUpdate = (id: number, status: EStatus) => {
    switch (status) {
      case EStatus.PREPARE:
        todoStore.update(Number(id), {
          ...todoStore.list.filter((t) => t.id === id)[0],
          status: EStatus.PROCESS,
        });
        break;
      case EStatus.PROCESS:
        todoStore.update(Number(id), {
          ...todoStore.list.filter((t) => t.id === id)[0],
          status: EStatus.DONE,
        });
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <List
        size="large"
        bordered
        dataSource={[...todoStore.list]}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                onClick={() => handleUpdate(Number(item.id), item.status)}
              >
                {item.status}
              </Button>,
            ]}
          >
            {item.title}
          </List.Item>
        )}
      />
    </div>
  );
});
