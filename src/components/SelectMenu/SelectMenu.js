import { Select } from "antd";

const { Option } = Select;

function SelectMenu() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  );
}

export default SelectMenu;
