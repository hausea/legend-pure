/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { observer } from 'mobx-react-lite';
import { useEditorStore } from '../../../stores/EditorStore';
import { ACTIVITY_MODE } from '../../../stores/EditorConfig';
import { ConceptTreeExplorer } from './ConceptTreeExplorer';
import { DirectoryTreeExplorer } from './DirectoryTreeExplorer';
import { clsx } from '@finos/legend-art';

/**
 * Wrapper component around different implementations of sidebar, such as to view domain, to manage SDLC, etc.
 */
export const SideBar = observer(() => {
  const editorStore = useEditorStore();

  const renderSideBar = (): React.ReactNode => {
    switch (editorStore.activeActivity) {
      case ACTIVITY_MODE.CONCEPT:
        return <ConceptTreeExplorer />;
      case ACTIVITY_MODE.FILE:
        return <DirectoryTreeExplorer />;
      default:
        return null;
    }
  };

  return (
    <div className="side-bar">
      <div
        key={editorStore.activeActivity}
        className={clsx('side-bar__view', 'side-bar__view--active')}
      >
        {renderSideBar()}
      </div>
    </div>
  );
});
