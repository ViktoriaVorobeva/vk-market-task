import React, { useEffect } from "react";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import { GoodsList } from "./components/GoodsList";
import { useDispatch, useSelector } from "./services/hooks";
import { getGoodsData } from "./services/actions";
import { LoadingOutlined } from "@ant-design/icons";
import { PriceTotal } from "./components/PriceTotal";

function App() {
  const { isLoading, isError } = useSelector((store) => store.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoodsData());
  }, []);

  return (
    <>
      <Title>Корзина</Title>
      {isLoading && <LoadingOutlined />}
      {isError && (
        <p style={{ color: "red" }}>
          Произошла ошибка! Обновите страницу/попробуйте отправить запрос позже
        </p>
      )}
      {!isError && !isLoading && (
        <Row gutter={40}>
          <Col span={18}>
            <Title level={2}>Выбранные товары</Title>
            <GoodsList />
          </Col>
          <Col span={6}>
            <PriceTotal />
          </Col>
        </Row>
      )}
    </>
  );
}

export default App;
