<template>
  <div>
    <div class="D_CategoryBox">
      <div class="CategoryTitleBox">تنظیمات سایدبار</div>
      <div class="CategorySubBox">
        <div class="CategorySubBoxPanel">
          <div class="CategorySubBoxPanelTitle">دسته ها</div>
          <label
            class="CategoryEditInputBox"
            v-for="(CategoryInEditMenu, index) in AllCategoryData.Categorys"
            :key="index"
          >
            <div class="CategoryIconBox">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.33329 10.6667C7.79353 10.6667 8.16663 11.0398 8.16663 11.5V16.5C8.16663 16.9602 7.79353 17.3333 7.33329 17.3333H1.49996C1.03972 17.3333 0.666626 16.9602 0.666626 16.5V11.5C0.666626 11.0398 1.03972 10.6667 1.49996 10.6667H7.33329ZM16.5 6.5C16.9602 6.5 17.3333 6.8731 17.3333 7.33333V16.5C17.3333 16.9602 16.9602 17.3333 16.5 17.3333H10.6666C10.2064 17.3333 9.83329 16.9602 9.83329 16.5V7.33333C9.83329 6.8731 10.2064 6.5 10.6666 6.5H16.5ZM7.33329 0.666667C7.79353 0.666667 8.16663 1.03976 8.16663 1.5V8.16667C8.16663 8.6269 7.79353 9 7.33329 9H1.49996C1.03972 9 0.666626 8.6269 0.666626 8.16667V1.5C0.666626 1.03976 1.03972 0.666667 1.49996 0.666667H7.33329ZM16.5 0.666667C16.9602 0.666667 17.3333 1.03976 17.3333 1.5V4C17.3333 4.46024 16.9602 4.83333 16.5 4.83333H10.6666C10.2064 4.83333 9.83329 4.46024 9.83329 4V1.5C9.83329 1.03976 10.2064 0.666667 10.6666 0.666667H16.5Z"
                  fill="#707070"
                  fill-opacity="0.5"
                />
              </svg>
            </div>
            <div class="CategoryVerticalHR"></div>
            <input
              type="text"
              :value="CategoryInEditMenu.value"
              @blur="FocusOutInput"
              disabled
            />
            <div class="EditIconBox" @click="OpenInputForEditing">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5 15.6667C16.9603 15.6667 17.3334 16.0398 17.3334 16.5C17.3334 16.9602 16.9603 17.3333 16.5 17.3333H1.50002C1.03978 17.3333 0.666687 16.9602 0.666687 16.5C0.666687 16.0398 1.03978 15.6667 1.50002 15.6667H16.5ZM4.2441 10.0774L13.4108 0.910744C13.7112 0.610341 14.1839 0.587233 14.5108 0.841421L14.5893 0.910744L17.0893 3.41074C17.3897 3.71115 17.4128 4.18384 17.1586 4.51075L17.0893 4.58926L7.92261 13.7559C7.79238 13.8862 7.62348 13.9688 7.44289 13.9928L7.33335 14H4.83335C4.40599 14 4.05376 13.6783 4.00563 13.2639L4.00002 13.1667V10.6667C4.00002 10.4825 4.06099 10.3046 4.17175 10.16L4.2441 10.0774L13.4108 0.910744L4.2441 10.0774ZM14 2.67851L5.66669 11.0118V12.3333H6.98818L15.3215 4L14 2.67851Z"
                  fill="#707070"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
            <div
              class="DeleteIconBox"
              @click="DeleteItemFromAllDataCategory(index)"
            >
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1666 5.66666C11.6269 5.66666 12 6.03975 12 6.49999V14.8333C12 16.214 10.8807 17.3333 9.49998 17.3333H4.49998C3.11927 17.3333 1.99998 16.214 1.99998 14.8333V6.49999C1.99998 6.03975 2.37308 5.66666 2.83331 5.66666H11.1666ZM10.3333 7.33332H3.66665V14.8333C3.66665 15.2936 4.03974 15.6667 4.49998 15.6667H9.49998C9.96022 15.6667 10.3333 15.2936 10.3333 14.8333V7.33332ZM4.49998 1.49999C4.49998 1.03975 4.87308 0.666656 5.33331 0.666656H8.66665C9.12688 0.666656 9.49998 1.03975 9.49998 1.49999V2.33332H12.8333C13.2936 2.33332 13.6666 2.70642 13.6666 3.16666C13.6666 3.62689 13.2936 3.99999 12.8333 3.99999H1.16665C0.706409 3.99999 0.333313 3.62689 0.333313 3.16666C0.333313 2.70642 0.706409 2.33332 1.16665 2.33332H4.49998V1.49999Z"
                  fill="#707070"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
          </label>

          <div
            class="AddToCategoryBottunBox"
            @click="AddCategoryToCategoryData"
          >
            <span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 0.5C5.41421 0.5 5.75 0.835786 5.75 1.25V4.25H8.75C9.16421 4.25 9.5 4.58579 9.5 5C9.5 5.41421 9.16421 5.75 8.75 5.75H5.75V8.75C5.75 9.16421 5.41421 9.5 5 9.5C4.58579 9.5 4.25 9.16421 4.25 8.75V5.75H1.25C0.835786 5.75 0.5 5.41421 0.5 5C0.5 4.58579 0.835786 4.25 1.25 4.25H4.25V1.25C4.25 0.835786 4.58579 0.5 5 0.5Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>اضافه کردن دسته</span>
          </div>
          <div class="CategorySubBoxPanelTitle">زیر مجموعه دسته ها</div>
          <div>
            <label
              class="CategoryEditInputBox SelectCategoryForEditingSubCategory"
              @click="OpenListOfCategorys"
            >
              <div class="CategoryIconBox">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.33329 10.6667C7.79353 10.6667 8.16663 11.0398 8.16663 11.5V16.5C8.16663 16.9602 7.79353 17.3333 7.33329 17.3333H1.49996C1.03972 17.3333 0.666626 16.9602 0.666626 16.5V11.5C0.666626 11.0398 1.03972 10.6667 1.49996 10.6667H7.33329ZM16.5 6.5C16.9602 6.5 17.3333 6.8731 17.3333 7.33333V16.5C17.3333 16.9602 16.9602 17.3333 16.5 17.3333H10.6666C10.2064 17.3333 9.83329 16.9602 9.83329 16.5V7.33333C9.83329 6.8731 10.2064 6.5 10.6666 6.5H16.5ZM7.33329 0.666667C7.79353 0.666667 8.16663 1.03976 8.16663 1.5V8.16667C8.16663 8.6269 7.79353 9 7.33329 9H1.49996C1.03972 9 0.666626 8.6269 0.666626 8.16667V1.5C0.666626 1.03976 1.03972 0.666667 1.49996 0.666667H7.33329ZM16.5 0.666667C16.9602 0.666667 17.3333 1.03976 17.3333 1.5V4C17.3333 4.46024 16.9602 4.83333 16.5 4.83333H10.6666C10.2064 4.83333 9.83329 4.46024 9.83329 4V1.5C9.83329 1.03976 10.2064 0.666667 10.6666 0.666667H16.5Z"
                    fill="#707070"
                    fill-opacity="0.5"
                  />
                </svg>
              </div>
              <div class="CategoryVerticalHR"></div>
              <input type="text" :value="'Select Category'" disabled />
              <div class="EditIconBox InSelectCategory">
                <svg
                  width="6"
                  height="14"
                  viewBox="0 0 6 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.40009 -6.67572e-06C5.24648 -6.67572e-06 5.09288 0.0762157 4.97587 0.227883L0.175712 6.45013C-0.0588961 6.75424 -0.0588961 7.2458 0.175712 7.54991L4.97587 13.7722C5.21048 14.0763 5.58969 14.0763 5.8243 13.7722C6.05891 13.468 6.05891 12.9765 5.8243 12.6724L1.44835 7.00002L5.8243 1.32767C6.05891 1.02355 6.05891 0.531996 5.8243 0.227883C5.7073 0.0762157 5.55369 -6.67572e-06 5.40009 -6.67572e-06Z"
                    fill="#707070"
                  />
                </svg>
              </div>
            </label>
            <div class="CategoryAllDataForAddSubCategory">
              <div class="CategoryEditInputBox">
                <div class="CategoryIconBox">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.33329 10.6667C7.79353 10.6667 8.16663 11.0398 8.16663 11.5V16.5C8.16663 16.9602 7.79353 17.3333 7.33329 17.3333H1.49996C1.03972 17.3333 0.666626 16.9602 0.666626 16.5V11.5C0.666626 11.0398 1.03972 10.6667 1.49996 10.6667H7.33329ZM16.5 6.5C16.9602 6.5 17.3333 6.8731 17.3333 7.33333V16.5C17.3333 16.9602 16.9602 17.3333 16.5 17.3333H10.6666C10.2064 17.3333 9.83329 16.9602 9.83329 16.5V7.33333C9.83329 6.8731 10.2064 6.5 10.6666 6.5H16.5ZM7.33329 0.666667C7.79353 0.666667 8.16663 1.03976 8.16663 1.5V8.16667C8.16663 8.6269 7.79353 9 7.33329 9H1.49996C1.03972 9 0.666626 8.6269 0.666626 8.16667V1.5C0.666626 1.03976 1.03972 0.666667 1.49996 0.666667H7.33329ZM16.5 0.666667C16.9602 0.666667 17.3333 1.03976 17.3333 1.5V4C17.3333 4.46024 16.9602 4.83333 16.5 4.83333H10.6666C10.2064 4.83333 9.83329 4.46024 9.83329 4V1.5C9.83329 1.03976 10.2064 0.666667 10.6666 0.666667H16.5Z"
                      fill="#707070"
                      fill-opacity="0.5"
                    />
                  </svg>
                </div>
                <div class="CategoryVerticalHR"></div>
                <span>Test</span>
              </div>
              <div class="CategoryEditInputBox">
                <div class="CategoryIconBox">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.33329 10.6667C7.79353 10.6667 8.16663 11.0398 8.16663 11.5V16.5C8.16663 16.9602 7.79353 17.3333 7.33329 17.3333H1.49996C1.03972 17.3333 0.666626 16.9602 0.666626 16.5V11.5C0.666626 11.0398 1.03972 10.6667 1.49996 10.6667H7.33329ZM16.5 6.5C16.9602 6.5 17.3333 6.8731 17.3333 7.33333V16.5C17.3333 16.9602 16.9602 17.3333 16.5 17.3333H10.6666C10.2064 17.3333 9.83329 16.9602 9.83329 16.5V7.33333C9.83329 6.8731 10.2064 6.5 10.6666 6.5H16.5ZM7.33329 0.666667C7.79353 0.666667 8.16663 1.03976 8.16663 1.5V8.16667C8.16663 8.6269 7.79353 9 7.33329 9H1.49996C1.03972 9 0.666626 8.6269 0.666626 8.16667V1.5C0.666626 1.03976 1.03972 0.666667 1.49996 0.666667H7.33329ZM16.5 0.666667C16.9602 0.666667 17.3333 1.03976 17.3333 1.5V4C17.3333 4.46024 16.9602 4.83333 16.5 4.83333H10.6666C10.2064 4.83333 9.83329 4.46024 9.83329 4V1.5C9.83329 1.03976 10.2064 0.666667 10.6666 0.666667H16.5Z"
                      fill="#707070"
                      fill-opacity="0.5"
                    />
                  </svg>
                </div>
                <div class="CategoryVerticalHR"></div>
                <span>Test2</span>
              </div>
            </div>
            <label class="CategoryEditInputBox CategoryEditSubInputBox">
              <div class="CategoryIconBox">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.33329 10.6667C7.79353 10.6667 8.16663 11.0398 8.16663 11.5V16.5C8.16663 16.9602 7.79353 17.3333 7.33329 17.3333H1.49996C1.03972 17.3333 0.666626 16.9602 0.666626 16.5V11.5C0.666626 11.0398 1.03972 10.6667 1.49996 10.6667H7.33329ZM16.5 6.5C16.9602 6.5 17.3333 6.8731 17.3333 7.33333V16.5C17.3333 16.9602 16.9602 17.3333 16.5 17.3333H10.6666C10.2064 17.3333 9.83329 16.9602 9.83329 16.5V7.33333C9.83329 6.8731 10.2064 6.5 10.6666 6.5H16.5ZM7.33329 0.666667C7.79353 0.666667 8.16663 1.03976 8.16663 1.5V8.16667C8.16663 8.6269 7.79353 9 7.33329 9H1.49996C1.03972 9 0.666626 8.6269 0.666626 8.16667V1.5C0.666626 1.03976 1.03972 0.666667 1.49996 0.666667H7.33329ZM16.5 0.666667C16.9602 0.666667 17.3333 1.03976 17.3333 1.5V4C17.3333 4.46024 16.9602 4.83333 16.5 4.83333H10.6666C10.2064 4.83333 9.83329 4.46024 9.83329 4V1.5C9.83329 1.03976 10.2064 0.666667 10.6666 0.666667H16.5Z"
                    fill="#707070"
                    fill-opacity="0.5"
                  />
                </svg>
              </div>
              <div class="CategoryVerticalHR"></div>
              <input
                type="text"
                :value="'AAA'"
                @blur="FocusOutInput"
                disabled
              />
              <div class="EditIconBox" @click="OpenInputForEditing">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5 15.6667C16.9603 15.6667 17.3334 16.0398 17.3334 16.5C17.3334 16.9602 16.9603 17.3333 16.5 17.3333H1.50002C1.03978 17.3333 0.666687 16.9602 0.666687 16.5C0.666687 16.0398 1.03978 15.6667 1.50002 15.6667H16.5ZM4.2441 10.0774L13.4108 0.910744C13.7112 0.610341 14.1839 0.587233 14.5108 0.841421L14.5893 0.910744L17.0893 3.41074C17.3897 3.71115 17.4128 4.18384 17.1586 4.51075L17.0893 4.58926L7.92261 13.7559C7.79238 13.8862 7.62348 13.9688 7.44289 13.9928L7.33335 14H4.83335C4.40599 14 4.05376 13.6783 4.00563 13.2639L4.00002 13.1667V10.6667C4.00002 10.4825 4.06099 10.3046 4.17175 10.16L4.2441 10.0774L13.4108 0.910744L4.2441 10.0774ZM14 2.67851L5.66669 11.0118V12.3333H6.98818L15.3215 4L14 2.67851Z"
                    fill="#707070"
                    fill-opacity="0.8"
                  />
                </svg>
              </div>
              <div
                class="DeleteIconBox"
                @click="DeleteItemFromAllDataSubCategory(index)"
              >
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.1666 5.66666C11.6269 5.66666 12 6.03975 12 6.49999V14.8333C12 16.214 10.8807 17.3333 9.49998 17.3333H4.49998C3.11927 17.3333 1.99998 16.214 1.99998 14.8333V6.49999C1.99998 6.03975 2.37308 5.66666 2.83331 5.66666H11.1666ZM10.3333 7.33332H3.66665V14.8333C3.66665 15.2936 4.03974 15.6667 4.49998 15.6667H9.49998C9.96022 15.6667 10.3333 15.2936 10.3333 14.8333V7.33332ZM4.49998 1.49999C4.49998 1.03975 4.87308 0.666656 5.33331 0.666656H8.66665C9.12688 0.666656 9.49998 1.03975 9.49998 1.49999V2.33332H12.8333C13.2936 2.33332 13.6666 2.70642 13.6666 3.16666C13.6666 3.62689 13.2936 3.99999 12.8333 3.99999H1.16665C0.706409 3.99999 0.333313 3.62689 0.333313 3.16666C0.333313 2.70642 0.706409 2.33332 1.16665 2.33332H4.49998V1.49999Z"
                    fill="#707070"
                    fill-opacity="0.8"
                  />
                </svg>
              </div>
              <div
                class="AddSubCategoryBottunInEdit"
                @click="AddCategoryToSubCategoryData"
              >
                <span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 0.5C5.41421 0.5 5.75 0.835786 5.75 1.25V4.25H8.75C9.16421 4.25 9.5 4.58579 9.5 5C9.5 5.41421 9.16421 5.75 8.75 5.75H5.75V8.75C5.75 9.16421 5.41421 9.5 5 9.5C4.58579 9.5 4.25 9.16421 4.25 8.75V5.75H1.25C0.835786 5.75 0.5 5.41421 0.5 5C0.5 4.58579 0.835786 4.25 1.25 4.25H4.25V1.25C4.25 0.835786 4.58579 0.5 5 0.5Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </label>
          </div>
          <div class="AddToCategoryBottunBox">
            <span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 0.5C5.41421 0.5 5.75 0.835786 5.75 1.25V4.25H8.75C9.16421 4.25 9.5 4.58579 9.5 5C9.5 5.41421 9.16421 5.75 8.75 5.75H5.75V8.75C5.75 9.16421 5.41421 9.5 5 9.5C4.58579 9.5 4.25 9.16421 4.25 8.75V5.75H1.25C0.835786 5.75 0.5 5.41421 0.5 5C0.5 4.58579 0.835786 4.25 1.25 4.25H4.25V1.25C4.25 0.835786 4.58579 0.5 5 0.5Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>اضافه کردن زیر مجموعه</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  name: 'Category',
  data() {
    return {
      AllCategoryData: {
        DefaultValueForInsert: 'Test',
        OpenedCategory: [],
        Categorys: [
          {
            value: 'کالای دیجیتال',
            SubCategorys: [{ value: 'کالای اداری' }],
          },
          {
            value: 'کالای اداری',
            SubCategorys: [],
          },
        ],
      },
    }
  },
  methods: {
    OpenInputForEditing(element) {
      for (let i = 0; i < element.path.length; i++)
        if (element.path[i].tagName == 'LABEL') {
          for (let j = 0; j < element.path[i].childNodes.length; j++) {
            if (element.path[i].childNodes[j].tagName == 'INPUT') {
              element.path[i].childNodes[j].removeAttribute('disabled')
              element.path[i].childNodes[j].classList.add(
                'ActiveInputForEditingInformation'
              )
              element.path[i].childNodes[j].setSelectionRange(
                element.path[i].childNodes[j].value.length,
                element.path[i].childNodes[j].value.length
              )
              element.path[i].childNodes[j].focus()
              break
            }
          }
          break
        }
    },
    FocusOutInput(element) {
      element.srcElement.classList.remove('ActiveInputForEditingInformation')
      element.srcElement.setAttribute('disabled', '')
      // Save Value And send tu backend in this line
    },
    AddCategoryToCategoryData() {
      this.AllCategoryData.Categorys.push({
        value: this.AllCategoryData.DefaultValueForInsert,
      })
    },
    DeleteItemFromAllDataCategory(index) {
      this.AllCategoryData.Categorys.splice(index, 1)
    },

    AddCategoryToSubCategoryData() {
      this.AllCategoryData.Categorys.SubCategorys.push({
        value: this.AllCategoryData.DefaultValueForInsert,
      })
    },
    DeleteItemFromAllDataSubCategory(index) {
      this.AllCategoryData.Categorys.SubCategorys.splice(index, 1)
    },
    OpenListOfCategorys() {
      alert(1)
    },
  },
}
</script>

<style>
@import url(@/static/css/categoryPage.css);
</style>
