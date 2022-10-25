import ProductoDaoFactory from '../classes/ProductoDaoFactory.class.js'
const DAO = ProductoDaoFactory.getDao()


export const createProducto = async ({ datos }) => {
  const newProducto = await DAO.create(datos )
  return newProducto;
};

export const getProducto = async ({ id }) => {
  const producto = await DAO.getById(id)
  if(!producto) throw new Error( "Producto no encontrado")
  return producto;
};

export const getProductos = async ({ campo, valor }) => {
  const verProductos = await DAO.getAll()
  if (campo && valor) {
    return verProductos.filter((producto) => producto[campo] == valor);
  } else {
    return verProductos;
  }
};

export const updateProducto = async ({ id, datos }) => {
  const producto = await DAO.getById(id)
  if(!producto) throw new Error( "Producto no encontrado")
  const {title, description, code, price, thumbnail, stock} = datos
  const productoUpdated = await DAO.update(id, title, description, code, price, thumbnail, stock)
  return productoUpdated;
};

export const deleteProducto = async ({ id }) => {
  const productoDeleted = await DAO.getById(id)
  if(!productoDeleted) throw new Error( "Producto no encontrado")
  await DAO.deleteById(id)
  
  return productoDeleted;
};
