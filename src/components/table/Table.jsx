import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "March 1, 2022",
      amount: 875,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 5687905,
      product: "Shoes Closet",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY_FMwebp_QL65_.jpg",
      customer: "Sarah Peterson",
      date: "May 31, 2022",
      amount: 1289,
      method: "online",
      status: "Pending",
    },
    {
      id: 2567345,
      product: "Baseball Bat",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY_FMwebp_QL65_.jpg",
      customer: "Eric Johnson",
      date: "July 4, 2022",
      amount: 157,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 45678943,
      product: "Computer",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY_FMwebp_QL65_.jpg",
      customer: "Mason Henderson",
      date: "July 4, 2022",
      amount: 157,
      method: "online",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <div className="cellWrapper">
                <img src={row.img} atl="" className="image" />
                {row.product}
              </div>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}> {row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
