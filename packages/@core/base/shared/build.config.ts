import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['src/cache/index', 'src/color/index', 'src/utils/index'],
});
