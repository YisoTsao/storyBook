!(function (e) {
  const a = (e['es-co'] = e['es-co'] || {});
  (a.dictionary = Object.assign(a.dictionary || {}, {
    '%0 of %1': '%0 de %1',
    'Align center': 'Centrar',
    'Align left': 'Alinear a la izquierda',
    'Align right': 'Alinear a la derecha',
    'Block quote': 'Cita de bloque',
    Bold: 'Negrita',
    Cancel: 'Cancelar',
    'Cannot determine a category for the uploaded file.':
      'No se pudo determinar una categoría para el archivo cargado.',
    'Cannot upload file:': 'No se pudo cargar el archivo:',
    Italic: 'Cursiva',
    Justify: 'Justificar',
    'Open file manager': 'Abrir administrador de archivos',
    'Remove color': 'Quitar color',
    Save: 'Guardar',
    'Show more items': 'Mostrar más elementos',
    Strikethrough: 'Tachado',
    'Text alignment': 'Alineación de texto',
    'Text alignment toolbar': 'Herramientas de alineación de texto',
    Underline: 'Subrayado',
    'Upload in progress': 'Carga en progreso',
  })),
    (a.getPluralForm = function (e) {
      return 1 == e ? 0 : 0 != e && e % 1e6 == 0 ? 1 : 2;
    });
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
