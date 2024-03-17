import { GoodCard } from "../GoodCard";
import { useSelector } from "../../services/hooks";
import { Typography } from "antd";

const { Text } = Typography;

export const GoodsList = () => {
  const { goods } = useSelector((store) => store.goods);
  
  return (
    <>
      {goods.length !== 0 ? (
        goods.map((good) => <GoodCard key={good.id} {...good} />)
      ) : (
        <Text>Товары не найдены</Text>
      )}
    </>
  );
};
