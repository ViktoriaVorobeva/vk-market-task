import { useSelector } from "../../services/hooks";
import Title from "antd/es/typography/Title";

export const PriceTotal = () => {
    const { goods } = useSelector((store) => store.goods);
    const total = goods.reduce((acc, val) => acc += val.price * val.quantity, 0);

    return <Title>Итого: {total} руб.</Title>
}