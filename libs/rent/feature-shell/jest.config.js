module.exports = {
  name: 'rent-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/rent/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
