import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

// =======================================================
// * Aplica con la estructura de datos en un arreglo 1/2
// =======================================================
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }
// =======================================================

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// =======================================================
// * Aplica con la estructura de datos en un arreglo 2/2
// =======================================================
// Función original del curso antes de la lección 144.
// export const selectCollection = collectionURLparameter =>
//   createSelector(
//     [selectCollections],
//     collections => collections.find(collection =>
//         collection.id === COLLECTION_ID_MAP[collectionURLparameter]
//     )
// );
// =======================================================
// Función lodash.memoize según explicación
// export const selectCollection = memoize (collectionURLparameter =>
//   createSelector(
//     [selectCollections],
//     collections => collections.find(collection =>
//         collection.id === COLLECTION_ID_MAP[collectionURLparameter]
//     )
//   )
// );
// =======================================================

export const selectCollectionsPreview = createSelector (
  [selectCollections],
  collections => Object.keys(collections)
                       .map(key => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);


// Otra versión que también funciona
// const selectTienda = state => state.tienda;

// export const selectCosas = createSelector (
//   [selectTienda],
//   tienda => tienda.cosas
// );

// export const selectCosas = createSelector (
//   [estado => estado.tienda],
//   tienda => tienda.cosas
// );