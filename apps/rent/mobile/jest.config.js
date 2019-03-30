module.exports = {
  name: 'rent-mobile',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/rent/mobile/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
