module.exports = {
  name: 'nursery-match-creator',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nursery-match-creator',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
