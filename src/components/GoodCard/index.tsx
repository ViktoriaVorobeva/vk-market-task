import React from "react";
import { Good } from "../../types";
import { Button, Card, Flex, Typography } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "../../services/hooks";
import { changeQuantityGood, deleteGood } from "../../services/actions";
import { MAX, MIN } from "../../utils/constants";

const { Meta } = Card;
const { Text } = Typography;

export const GoodCard: React.FC<Good> = ({
  id,
  thumbnail,
  title,
  description,
  quantity,
  price,
}) => {
  const dispatch = useDispatch();

  const onClickHandler = (count: number) => {
    if (count < MIN || count > MAX) {
      return;
    }
    dispatch(changeQuantityGood(id, count));
  };

  return (
    <Card style={{ marginBottom: 20 }} hoverable>
      <Flex gap={20} style={{ padding: 5 }}>
        <div style={{ width: 150, height: 150 }}>
          <img width="auto" height="100%" alt={title} src={thumbnail} />
        </div>
        <Flex style={{ width: "100%" }} justify="space-between">
          <Flex vertical justify="space-between">
            <Meta title={title} description={description} />
            <Text>Цена: {(price * quantity).toFixed(2)}руб.</Text>

            <div>
              <Button
                onClick={() => onClickHandler(quantity - 1)}
                style={{ marginRight: 10 }}
                icon={<MinusOutlined />}
              />
              <Text style={{ marginRight: 10 }}>{quantity}</Text>
              <Button
                onClick={() => onClickHandler(quantity + 1)}
                icon={<PlusOutlined />}
              />
            </div>
          </Flex>
          <div>
            <Button
              onClick={() => dispatch(deleteGood(id))}
              icon={<DeleteOutlined />}
            />
          </div>
        </Flex>
      </Flex>
    </Card>
  );
};
