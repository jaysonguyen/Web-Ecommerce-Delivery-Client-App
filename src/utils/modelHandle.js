export function OrderTableFromJson(order) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    "Order Code": order.order_code,
    Status: (
      <div className={"order_status " + order.action_name}>
        {order.action_name}
      </div>
    ),
    "Receiver Name": JSON.parse(order.receiver).name,
    "Total Cost": order.total_cost,
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}

export function OrderSearchFromJson(order) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    ID: order.id,
    "Order Code": order.code,
    Status: (
      <div className={"order_status " + order.action_name}>
        {order.action_name}
      </div>
    ),
    City: order.city_name,
    Area: order.area_name,
    "Total Cost": order.total,
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}

export function CustomerTableFromJson(data) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    // ID: data.id,
    Code: data.code,
    Account: data.account,
    Phone: data.phoneNumber,
    Address: data.address,
    COD: data.cod,
    Point: data.point,
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}

export function BranchTableFromJson(data) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    ID: data.branch_id,
    Code: data.code,
    Name: data.name,
    Address: data.address,
    Description: data.des,
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}

export function BankAccountTableFromJson(data) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    ID: data.user_id,
    Number: data.bank_number,
    Name: data.bank_name,
    Address: data.address,
    Created: data.date_time,
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}

export function StoreTableFromJson(data) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    ID: data.store_id,
    Code: data.store_code,
    Name: data.name,
    Created: data.created,
    State: data.state,
  };
}
export function StaffTableFromJson(data) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    ID: data.id,
    Code: data.code,
    Name: data.fullName,
    Phone: data.phoneNumber,
    Role: data.roleName,
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}

export function VoucherTableFromJson(data) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    ID: data.voucherId,
    Name: data.name,
    Cost: data.cost,
    Period: data.created,
    Quantity: data.quantity,
    Remain: data.quantity - data.used,
    Status: data.status === "1" ? <div>Active</div> : <div>Inactive</div>,
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}

export function OrderItemFromJson(order) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    order_id: order.order_id,
    order_code: order.order_code,
    action_name: order.action_name,
    user_name: order.user_name,
    receiver: JSON.parse(order.receiver).name,
    address: JSON.parse(order.receiver).address,
    phone: JSON.parse(order.receiver).phone,
    product_type_name: order.product_type_name,
    total_cost: order.total_cost,
    created: order.created,
    updated: order.updated,
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}
export function HistoryOrderFromJson(history, index) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    ID: history.history_id,
    Step: index + 1,
    Shipper: history.shipper_name,
    "Date Time": history.date_time,
    "Action By": history.input_by,
    Note: history.note,
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}
export function HistoryVoucherFromJson(history, index) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    ID: history.history_id,
    Step: index + 1,
    "Order ID": history.order_id,
    "Date Time": history.date_time,
    "Action By": history.input_by,
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}
export function CityFromJson(city) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    ID: city.id,
    Code: city.code,
    Name: city.name,
    Description: city.des,
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}

export function OrderDetailsFromJson(order) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    order_id: order.order_id,
    order_code: order.order_code,
    action_code: order.action_code,
    user_name: order.user_name,
    city_name: order.city_name,
    area_name: order.area_name,
    address: JSON.parse(order.address),
    receiver: JSON.parse(order.receiver),
    product: JSON.parse(order.product),
    package_order: JSON.parse(order.package_order),
    product_type_name: order.product_type_name,
    total_cost: order.total_cost,
    created: order.created,
    updated: order.updated,
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}

export function JsonToString(data) {
  return JSON.stringify(data);
}
