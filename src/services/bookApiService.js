import db from "../models/index";
const upBook = async (rawdata) => {
  try {
    const newBook = await db.Books.create({
      name: rawdata.name,
      urlImage: rawdata.urlImage,
      author: rawdata.author,
      date: rawdata.date,
      description: rawdata.description,
      vote: +rawdata.vote,
    });
    // console.log(rawdata);

    let bookId = newBook.id;
    const newUserEBook = await db.User_Books.create({
      datauserId: +rawdata.user,
      BookId: bookId,
    });
    console.log(newUserEBook);
    return {
      EM: "Ebook in Uploaded ^^",
      EC: 0,
      DT: newBook,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "ERROR from Book",
      EC: -1,
      DT: "",
    };
  }
};
const readAll = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Books.findAndCountAll({
      offset: offset,
      limit: +limit,
      order: [["id", "DESC"]],
    });
    let totalPage = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPage: totalPage,
      book: rows,
    };
    return {
      EC: 0,
      EM: "Get EBook Ok",
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EC: -1,
      EM: "ERROR from Book",
      DT: "",
    };
  }
};
const ebookDetail = async (id) => {
  try {
    let data = await db.Books.findOne({
      where: { id: id },
      include: [{ model: db.datausers }],
    });
    return {
      EM: "Get Detail EBook !",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EC: -1,
      EM: "ERROR from EBook",
      DT: "",
    };
  }
};
module.exports = {
  upBook,
  readAll,
  ebookDetail,
};
