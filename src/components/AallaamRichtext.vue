<template>
  <div class="richtext-container richtext-content" data-app>
    <div v-if="editor">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('bold') }" @click="editor.chain().focus().toggleBold().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-bold`" />
          </v-btn>
        </template>
        <span>{{ boldTooltip }}</span>
      </v-tooltip>
      
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-italic`" />
          </v-btn>
        </template>
        <span>{{ italicTooltip }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('underline') }" @click="editor.chain().focus().toggleUnderline().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-underline`" />
          </v-btn>
        </template>
        <span>{{ underlineTooltip }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive({ textAlign: 'left' }) }" @click="editor.isActive({ textAlign: 'left' }) ? editor.chain().focus().unsetTextAlign().run() : editor.chain().focus().setTextAlign('left').run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-align-left`" />
          </v-btn>
        </template>
        <span>{{ alignLeftTooltip }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive({ textAlign: 'center' }) }" @click="editor.isActive({ textAlign: 'center' }) ? editor.chain().focus().unsetTextAlign().run() : editor.chain().focus().setTextAlign('center').run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-align-center`" />
          </v-btn>
        </template>
        <span>{{ alignCenterTooltip }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive({ textAlign: 'right' }) }" @click="editor.isActive({ textAlign: 'right' }) ? editor.chain().focus().unsetTextAlign().run() : editor.chain().focus().setTextAlign('right').run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-align-right`" />
          </v-btn>
        </template>
        <span>{{ alignRightTooltip }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive({ dir: 'ltr' }) }" @click="editor.isActive({ dir: 'ltr' }) ? editor.chain().focus().setTextDirection('auto').run() : editor.chain().focus().setTextDirection('ltr').run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-pilcrow-arrow-right`" />
          </v-btn>
        </template>
        <span>{{ dirLtrTooltip }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive({ dir: 'rtl' }) }" @click="editor.isActive({ dir: 'rtl' }) ? editor.chain().focus().setTextDirection('auto').run() : editor.chain().focus().setTextDirection('rtl').run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-pilcrow-arrow-left`" />
          </v-btn>
        </template>
        <span>{{ dirRtlTooltip }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('subscript') }" @click="editor.chain().focus().toggleSubscript().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-subscript`" />
          </v-btn>
        </template>
        <span>{{ subscriptTooltip }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('superscript') }" @click="editor.chain().focus().toggleSuperscript().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-superscript`" />
          </v-btn>
        </template>
        <span>{{ supscriptTooltip }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('orderedList') }" @click="editor.chain().focus().toggleOrderedList().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-list-numbered`" />
          </v-btn>
        </template>
        <span>{{ listNumberedTooltip }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('bulletList') }" @click="editor.chain().focus().toggleBulletList().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-list-bulleted`" />
          </v-btn>
        </template>
        <span>{{ listBulletedTooltip }}</span>
      </v-tooltip>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn :class="{ 'v-btn--active': editor.isActive('code') }" v-bind="attrs" v-on="on" icon>
                  <v-icon v-text="`mdi-table`" />
                </v-btn>
              </template>
              <span>{{ tableTooltip }}</span>
            </v-tooltip>
          </span>
        </template>
        <v-card>
          <v-card-text class="pa-3">
            <div v-for="(row, index) in tableCells.rows" :key="index" style="height: 12px">
              <span v-for="(col, index) in tableCells.cols" :key="index" class="table-insert-cells" :class="{'active' : tableCells.row >= row && tableCells.col >= col }" @mouseover="tableCellsHover(row, col)" @click="editor.chain().focus().insertTable({ rows: row, cols: col, withHeaderRow: true }).run()" role="button"></span>
            </div>
            <div class="text-center mt-1">
              {{ tableCells.row }} x {{ tableCells.col }}
            </div>
          </v-card-text>
        </v-card>
      </v-menu>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('blockquote') }" @click="editor.chain().focus().toggleBlockquote().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-format-quote-close`" />
          </v-btn>
        </template>
        <span>{{ quoteTooltip }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :class="{ 'v-btn--active': editor.isActive('code') }" @click="editor.chain().focus().toggleCode().run()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-code-tags`" />
          </v-btn>
        </template>
        <span>{{ codeTooltip }}</span>
      </v-tooltip>

      <v-dialog v-model="linkDialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn :class="{ 'v-btn--active': editor.isActive('link') }"  v-bind="attrs" v-on="on" icon>
                  <v-icon v-text="`mdi-link-variant`" />
                </v-btn>
              </template>
              <span>{{ linkTooltip }}</span>
            </v-tooltip>
          </span>
        </template>

        <v-card>
          <v-card-title v-text="linkTitle" />

          <v-card-text>
            <v-text-field v-model="linkUrl" :label="linkInputLabel" :placeholder="linkInputPlaceholder" dir="ltr" class="my-3" outlined hide-details />
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="setLink()" min-width="125" large>
              {{ linkButtonText }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="editor.chain().focus().undo().run()" :disabled="!editor.can().undo()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-arrow-u-left-top`" />
          </v-btn>
        </template>
        <span>{{ undoTooltip }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="editor.chain().focus().redo().run()" :disabled="!editor.can().redo()" v-bind="attrs" v-on="on" icon>
            <v-icon v-text="`mdi-arrow-u-right-top`" />
          </v-btn>
        </template>
        <span>{{ redoTooltip }}</span>
      </v-tooltip>

      <v-divider />
    </div>
    <editor-content :editor="editor" />

    <v-card v-if="withImage" color="transparent" max-width="200" outlined>
        <v-card-text class="pt-0">
            <label>
                <input ref="newImagesInput" @change="addImages($event)" class="d-none" type="file" name="images" accept="image/*" multiple>
                <div class="border-dashed px-3 py-5 text-center primary--text h-100 d-flex flex-column align-center justify-center">
                    <v-icon color="primary" v-text="`mdi-camera`" class="display-1" small />
                    <div class="caption">{{ uploadImageText }}</div>
                </div>
            </label>
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import Document from '@tiptap/extension-document'
import Gapcursor from '@tiptap/extension-gapcursor'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import Code from '@tiptap/extension-code'
import Blockquote from '@tiptap/extension-blockquote'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import History from '@tiptap/extension-history'
import TextDirection from '@/extensions/tiptap-text-direction'

export default {
  name: 'AallaamRichText',
  components: { EditorContent },
  props: {
    boldTooltip: {
      type: String,
      default: 'Bold',
    },
    italicTooltip: {
      type: String,
      default: 'Italic',
    },
    underlineTooltip: {
      type: String,
      default: 'Underline',
    },
    alignLeftTooltip: {
      type: String,
      default: 'Align Left',
    },
    alignCenterTooltip: {
      type: String,
      default: 'Align Center',
    },
    alignRightTooltip: {
      type: String,
      default: 'Align Right',
    },
    dirLtrTooltip: {
      type: String,
      default: 'Dir Ltr',
    },
    dirRtlTooltip: {
      type: String,
      default: 'Dir Rtl',
    },
    subscriptTooltip: {
      type: String,
      default: 'Subscript',
    },
    supscriptTooltip: {
      type: String,
      default: 'Supscript',
    },
    listNumberedTooltip: {
      type: String,
      default: 'List Numbered',
    },
    listBulletedTooltip: {
      type: String,
      default: 'List Bulleted',
    },
    tableTooltip: {
      type: String,
      default: 'Table',
    },
    quoteTooltip: {
      type: String,
      default: 'Quote',
    },
    codeTooltip: {
      type: String,
      default: 'Code',
    },
    linkTooltip: {
      type: String,
      default: 'Link',
    },
    undoTooltip: {
      type: String,
      default: 'Undo',
    },
    redoTooltip: {
      type: String,
      default: 'Redo',
    },
    linkTitle: {
      type: String,
      default: 'Link Title',
    },
    linkInputLabel: {
      type: String,
      default: 'Link Lable',
    },
    linkInputPlaceholder: {
      type: String,
      default: 'Link Placeholder',
    },
    linkButtonText: {
      type: String,
      default: 'Link button text',
    },
    uploadImageText: {
      type: String,
      default: 'Upload Image text',
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: ''
    },
    withImage: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(newVal) {
      if(newVal == '') this.clearText()
    }
  },
  data() {
    return {
      editor: null,
      linkDialog: false,
      linkUrl: '',
      tableCells: {
        rows: 10,
        cols: 10,
        row: 0,
        col: 0
      }
    }
  },
  mounted() {
    this.editor = new Editor({
      content: this.value,
      extensions: [ Document, Gapcursor, Paragraph, Text, Bold, Italic, Underline, Subscript, Superscript, TextAlign.configure({types: ['paragraph'] }), Code, Blockquote, Link, Image, BulletList, OrderedList, ListItem, Gapcursor, Table, TableRow, TableHeader, TableCell, History, TextDirection.configure({types: ['paragraph'] }) ],
      onUpdate: () => {
        this.$emit('input', this.editor.getHTML())
      },
    })
  },
  methods: {
    addImages(event) {
      Object.values(event.target.files).map(async file => {
        const x = this.$emit('upload-image-callback', file);
        this.editor.commands.setImage({ src: x.$parent.imageUrl }, )
      });
    },
    setLink() {
      if(this.linkUrl) {
        this.editor.commands.setLink({ href: this.linkUrl, target: '_blank' })
        this.linkUrl = ''
        this.linkDialog = false
      }
    },
    clearText() {
      this.editor.commands.clearContent()
    },
    tableCellsHover(rows, cols) {
      this.tableCells.row = rows;
      this.tableCells.col = cols;
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
$grid-breakpoints: (
  'xs': 0,
  'sm': 600px,
  'md': 960px,
  'lg': 1280px - 16px,
  'xl': 1920px - 16px
) !default;

$display-breakpoints: (
  'print-only': 'only print',
  'screen-only': 'only screen',
  'xs-only': 'only screen and (max-width: #{map-get($grid-breakpoints, 'sm') - 0.02})',
  'sm-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')}) and (max-width: #{map-get($grid-breakpoints, 'md') - 0.02})',
  'sm-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'md') - 0.02})',
  'sm-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')})',
  'md-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')}) and (max-width: #{map-get($grid-breakpoints, 'lg') - 0.02})',
  'md-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'lg') - 0.02})',
  'md-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')})',
  'lg-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')}) and (max-width: #{map-get($grid-breakpoints, 'xl') - 0.02})',
  'lg-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'xl') - 0.02})',
  'lg-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')})',
  'xl-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'xl')})'
) !default;

.richtext-container {
  font-size: 1.5em;
  .v-toolbar {
      padding: 0;
      transition: .3s;
  }
  .v-toolbar__content {
      height: 0;
      overflow: hidden;
      div {
          .v-btn {
              &:nth-last-child(1) {
                  display: none;
              }
              @media #{map-get($display-breakpoints, 'xs-only')} {
                  height: 22px;
                  width: 22px;
                  .v-icon {
                      font-size: 20px;
                      height: 20px;
                      width: 20px;
                  }
              }
          }
      }
  }
  .tiptap-vuetify-editor__content {
      padding: 0;
      .ProseMirror {
          margin: 0 1rem !important;
      }
  }
}


.table-insert-cells {
  width: 11px;
  height: 10px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin: 0 1px;
  display: inline-block;
  &.active {
      background-color: #f57c00;
  }
}

.richtext-content {
  p,
  img {
      margin: .5rem 0 !important;
  }
  ul,
  ol {
      padding-right: 24px;
  }
  img {
      display: block;
  }
  blockquote {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      padding: .5rem;
      margin: .5rem;
  }
  table {
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;
      margin: 0;
      overflow: hidden;
      td,
      th {
        min-width: 1em;
        border: 2px solid #ced4da;
        padding: 3px 5px;
        vertical-align: top;
        box-sizing: border-box;
        position: relative;
        > * {
          margin-bottom: 0;
        }
      }
      th {
        font-weight: bold;
        text-align: left;
        background-color: #f1f3f5;
      }
      .selectedCell:after {
        z-index: 2;
        position: absolute;
        content: "";
        left: 0; right: 0; top: 0; bottom: 0;
        background: rgba(200, 200, 255, 0.4);
        pointer-events: none;
      }
      .column-resize-handle {
        position: absolute;
        right: -2px;
        top: 0;
        bottom: -2px;
        width: 4px;
        background-color: #adf;
        pointer-events: none;
      }
      p {
        margin: 0;
      }
  }
}

[dir=rtl] {
  .tiptap-vuetify-editor__content p.tiptap-vuetify-editor__paragraph--is-empty:first-child:before {
      float: right !important;
  }
}

.ProseMirror {
  min-height: 100px;
  margin-left: 1rem;
  margin-right: 1rem;
  &:focus-visible {
      outline: none;
  }
}

.tableWrapper {
  padding: 1rem 0;
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}
</style>