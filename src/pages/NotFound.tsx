import { Button, Result } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  code: number;
  message: string;
};

export const NotFound = ({ code, message }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 | Not Found";
  }, []);

  return (
    <div className="container-page">
      <Result
        status="404"
        title={String(code)}
        subTitle={message}
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Back Home
          </Button>
        }
      />
    </div>
  );
};
